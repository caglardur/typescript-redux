import React, { useState } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useAction } from "../hooks/useActions"

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("")
  const { searchRepositories } = useAction()
  const { data, error, loading } = useTypedSelector(state => state.repositories)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    searchRepositories(term)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error &&
        !loading &&
        data.map(name => (
          <div style={{ padding: "2px" }} key={name}>
            {name}
          </div>
        ))}
    </div>
  )
}

export default RepositoriesList
