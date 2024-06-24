import React from 'react'

const Filter = () => {
  return (
    <div>
      <div>
        <select name="filter-type" id="filter-type">
            <option value="filter-by">Filter By</option>
            <option value="funny-jokes">Funny Jokes</option>
            <option value="sad-jokes">Sad Jokes</option>
        </select>
      </div>
    </div>
  )
}

export default Filter
