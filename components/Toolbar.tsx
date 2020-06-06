import ToolbarButton from './Button/ToolbarButton'

const Toolbar = ({ buttons }) => {
  return (
    <div className="d-flex justify-content-between align-items-center toolbar">
      {buttons.map((className, index) => (
        <ToolbarButton className={className} key={index} />
      ))}
    </div>
  )
}

export default Toolbar
