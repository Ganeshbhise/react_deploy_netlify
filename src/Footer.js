const Footer = ({ length }) => {
  return (
      <footer>
          <p>{length} List {length === 1 ? "item" : "items"}</p>
          <p>Ganesh Bhise|Copyright &copy;|2023</p>
      </footer>
  )
}

export default Footer
