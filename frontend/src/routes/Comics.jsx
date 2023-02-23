import DataDisplay from "../components/DataDisplay"

const Comics = () => {

  const urlEnding ="c"
  return(
    <div>
<DataDisplay {...{urlEnding}}/>
    </div>
  )
}

export default Comics