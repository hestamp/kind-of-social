import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    if (post.title !== '' && post.body !== '') {
      const newPost = {
        ...post,
        id: Date.now(),
      }
      create(newPost)
      setPost({ title: '', body: '' })
    }
  }

  return (
    <form>
      <h2 style={{ textAlign: 'center' }}>New post</h2>
      <hr style={{ margin: '15px 0' }} />
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Project name"
      />

      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Description proj"
      />
      <hr style={{ margin: '15px 0' }} />
      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MyButton onClick={addNewPost}>Create</MyButton>
      </div>
    </form>
  )
}

export default PostForm
