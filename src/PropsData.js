const PropsData = ({propsItem,propsHandleDelete,title}) => {
   //const item= props.propsItem;
    //const handleDelete =props.propsHandleDelete;
    return ( 
        <div className="divOne" >
            <h3>{title} </h3>
            <h2> Div Props, div8 </h2>
        <p>{propsItem.map((itemm)=><p>
          <p>{itemm.pants}</p>
          <p>{itemm.size}</p>
          <button onClick={()=>propsHandleDelete(itemm.id)}>del</button>
        </p>)}</p>
      

      </div>
     );
}
 
export default PropsData;