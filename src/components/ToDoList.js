function ToDoList({ itemList, deleteItem }) {

  return (
    <div className="container mt-4 mb-4">
      <h3 style={{ color: "#a25cf7" }}>TASKS</h3>
      {itemList.map((item, index) => {
        return (
          <div key={index} style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"15px",padding:"5px",border:"2px solid lightGrey", borderRadius:"10px"}}>
            <label className="form-label">{item.content}</label>
            <button className="btn btn-danger" onClick={() => {deleteItem(item.id)
              console.log(item.id);
            }}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default ToDoList;
