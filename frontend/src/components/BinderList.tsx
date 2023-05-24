import { useState, useEffect } from 'react';
import binderService from "../services/binderService";

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
            <a href={`/${binder}`}>{binder}</a>
          </li>
        )}
      </ul>
    </>
  )
}

export default Binders;
