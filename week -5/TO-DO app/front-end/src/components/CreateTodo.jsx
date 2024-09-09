export  function CreateTodo(){
    return(
        <div>
            <input style={{
                padding:10,
                margin:10
            }} type="text" placeholder=""/><br/><br/>
            <input style={{
                
                    padding:10,
                    margin:10
                
            }} type="text" placeholder=""/><br/><br/>
            <button style={{
                padding: 8,
                margin:12,
                backgroundColor:"yellow"
            }}>add Todo</button>
        </div>
    )
}