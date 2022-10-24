import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostFilter = ({ filter, setFilter, limit, setLimit }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search..."
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '10px 0',
        }}
      >
        {/* <MySelect
          value={limit}
          onChange={(selectedLimit) => setLimit(selectedLimit)}
          defaultValue="List"
          options={[
            { value: '10', name: '10' },
            { value: '20', name: '20' },
            { value: '50', name: '50' },
          ]}
        /> */}
        <MySelect
          value={filter.sort}
          onChange={(selectedSort) =>
            setFilter({ ...filter, sort: selectedSort })
          }
          defaultValue="Sorting"
          options={[
            { value: 'title', name: 'By name' },
            { value: 'body', name: 'By description' },
            { value: '', name: 'Standart' },
          ]}
        />
      </div>
    </div>
  )
}

export default PostFilter
