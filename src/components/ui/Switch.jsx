const Switch = ({ id }) => {
  return <label class="switch" for={id}>
    <input type="checkbox" id={id} />
    <div class="slider round">

    </div>
  </label>
}

export { Switch }