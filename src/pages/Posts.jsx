import React, { useEffect, useRef, useState } from 'react'
import '../styles/App.css'

import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFillter'

import MyModal from '../components/UI/modal/MyModal'
import MyButton from '../components/UI/button/MyButton'
import Loader from '../components/UI/loader/Loader'
import Pagination from '../components/UI/pagination/Pagination'

import { usePosts } from '../hooks/usePosts'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import { getPageCount } from '../utils/pages'
import tort from '../API/posts.json'
import { useObserver } from '../hooks/useObserver'

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortAndSeacrh = usePosts(posts, filter.sort, filter.query)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
const lastElement = useRef()
  const [fetchPosts, isLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page)
      const totalCount = response.headers['x-total-count']
      // const totalCount = 100
      setPosts([...posts, ...response.data])
      // setPosts(tort)
      setTotalPages(getPageCount(totalCount, limit))
    }
  )

  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit])

  useObserver(lastElement, page < totalPages, isLoading, () => {
    setPage(page+1)
  })


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className="App">
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MyButton style={{ margin: '15px 0' }} onClick={() => setModal(true)}>Create Post</MyButton>
      </div>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
        limit={limit}
        setLimit={setLimit}
      />
      {postError && (
        <h3 style={{ margin: '25px' }}>We have error: {postError}</h3>
      )}
      <hr style={{ margin: '15px 0' }}/>
      <PostList remove={removePost} posts={sortAndSeacrh} title="Here's your posts" />
      <div ref={lastElement} style={{height: 20}}/>
      {isLoading &&
        <Loader />
      }
      
      {/* <Pagination page={page} changePage={changePage} totalPages={totalPages} /> */}
     
    </div>
  )
}

export default Posts
