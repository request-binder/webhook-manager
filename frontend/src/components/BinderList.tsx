import { useState, useEffect } from 'react';
import binderService from "../services/binderService";
import { Link } from "react-router-dom";

const Binders = () => {
  const [binderIds, setBinderIds] = useState<string[]>([]);
  useEffect(() => {
    binderService.getAll().then((initialBinderIds: string[]) => {
      setBinderIds(initialBinderIds)
    })
  }, [])
  return (
    <>
      <h1>Binders</h1>
      <ul>
        {binderIds.map((binder: string) =>
          <li key={binder}>
            <Link to={`/${binder}`}>{binder}</Link>
          </li>
        )}
      </ul>
    </>
  )
}

export default Binders;
