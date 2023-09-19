'use client'

export const InputForm = ({etiqueta,placeholder,clase,changeData,value,error}) =>{

    const handleChange = (e) =>{
        changeData(e.target.value)
    }
    const handleVerification = () =>{
      let valor =value;
      if(valor.length == 0){
        error(true)
      }
      else{
        error(false)
      }
    }

    return (<>
            <div>
                <label>{etiqueta}</label>
                <input onBlur={handleVerification} placeholder={placeholder} className={clase} value={value} onChange={handleChange} />
            </div>
        </>)
}