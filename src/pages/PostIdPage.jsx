import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import MyButton from '../components/UI/button/MyButton'
import Loader from '../components/UI/loader/Loader'
import { useFetching } from '../hooks/useFetching'

export default function PostIdPage() {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const responce = await PostService.getById(id)
    setPost(responce.data)
  })
  const [fetchComments, isComLoad, error2] = useFetching(async (id) => {
    const responce = await PostService.getComment(id)
    setComments(responce.data)
  })

  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])
  return (
    <div>
      <h2 style={{ margin: '30px' }}>Post No-{params.id}</h2>

      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ margin: '30px' }}>
          <div>Name: {post.title}</div>
          <br></br>
          <p>Desc: {post.body}</p>
        </div>
      )}

      <div style={{ margin: '30px' }}>
        <h2>Comments:</h2>
        <hr style={{margin: '10px'}}/>
        {isComLoad ? (
          <Loader />
        ) : (
          <div>
            {comments.map((com) => (
              <div key={com.id} style={{ marginTop: '15px' }}>
                <h4>{com.email}</h4>
                <div>{com.body}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <MyButton onClick={goBack}>Go Back</MyButton>
      </div>
    </div>
  )
}
