import React, { useEffect, useRef, useState } from 'react'
import "./table.scss"
import { FormControl, InputLabel, NativeSelect } from '@mui/material';
function Table({data,setData,page}) {
  const [focusedElements, setFocusedElements] = useState([]);

  
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
   
    console.log(focusedElements);
  
 const handleInputChange = (event, index,name) => {
   const newData = [...data];
   newData[index][name] = event.target.value;
   setData(newData);
 };
  const handleFocus = (inputIndex) => {
    let inputRef;
  if (inputIndex === 0) {
    inputRef= inputRef1;
  } else if (inputIndex === 1) {
    inputRef= inputRef2;
  } else {
   inputRef= inputRef3;
  }
    if (inputRef.current) {

      const existingElementIndex = focusedElements.findIndex(
        (element) => element.page === page
      );

      if (existingElementIndex !== -1) {
        const updatedElements = [...focusedElements];
        updatedElements[existingElementIndex] = {
          index: inputIndex,
          page: page,
          input: inputRef,
        };
        setFocusedElements(updatedElements);
      } else {
        setFocusedElements((prevElements) => [
          ...prevElements,
          { input: inputRef, index: inputIndex, page: page },
        ]);
      }
    }
  };
  useEffect(()=>{
    const handleFocus=()=>{
      const focuse=focusedElements?.find(item=>item.page==page)
      if(focuse){


        focuse.input.current.focus();
      }
    }
    handleFocus()

  },[page])
  
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          {data?.slice(page * 3, (page + 1) * 3).map((item, index) => (
            <td>
              <input
                type="text"
                value={item.name}
                onChange={(event) =>
                  handleInputChange(event, index + page * 3, "name")
                }
              />
            </td>
          ))}
        </tr>
        <tr>
          <th>Model</th>
          {data
            ?.slice(page * 3, (page + 1) * 3)

            ?.map((item, index) => (
              <td>
                <input
                  type="text"
                  value={item.model}
                  onChange={(event) =>
                    handleInputChange(event, index + page * 3, "model")
                  }
                />
              </td>
            ))}
        </tr>
        <tr>
          <th>Color</th>
          {data
            ?.slice(page * 3, (page + 1) * 3)

            ?.map((item, index) => (
              <td>
                <input
                  type="color"
                  value={item.color}
                  onChange={(event) =>
                    handleInputChange(event, index + page * 3, "color")
                  }
                />
              </td>
            ))}
        </tr>
        <tr>
          <th>Brand</th>
          {data
            ?.slice(page * 3, (page + 1) * 3)

            ?.map((item, index) => (
              <td>
                <FormControl fullWidth>
                  <NativeSelect
                    defaultValue={item.brand}
                    inputProps={{
                      name: "Brand",
                      id: "uncontrolled-native",
                    }}
                    onChange={(event) =>
                      handleInputChange(event, index + page * 3, "brand")
                    }
                  >
                    <option value={"TOMMY"}>TOMMY</option>
                    <option value={"SOVAGE"}>SOVAGE</option>
                    <option value={"LIOBARD"}>LIOBARD</option>
                    <option value={"PRAGA"}>PRAGA</option>
                  </NativeSelect>
                </FormControl>
              </td>
            ))}
        </tr>
        <tr>
          <th>Price</th>
          {data
            ?.slice(page * 3, (page + 1) * 3)

            ?.map((item, index) => (
              <td>
                <input
                  type="text"
                  value={item.Price}
                  className='price'
                  index={index}
                  onChange={(event) =>
                    handleInputChange(event, index + page * 3, "Price")
                  }
                  
                  ref={
                    index === 0
                      ? inputRef1
                      : index === 1
                      ? inputRef2
                      : inputRef3
                  }
                  onFocus={() => handleFocus(index)}
                />
              </td>
            ))}
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table