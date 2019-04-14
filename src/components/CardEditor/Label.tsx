function Label({ label }: any){
    const style = { backgroundColor: label.color }
    return (<div style={style}>
                {label.name}
            </div>)
}

export default Label;