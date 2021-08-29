import React, { Component,useState } from 'react';
import Editor from 'for-editor'

class ForEditor extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
    }
    this.$vm = React.createRef()
  }

  handleChange(value) {
    this.setState({
      value
    })
  }

  addImg($file) {
    this.$vm.current.$img2Url($file.name, 'file_url')
    console.log($file)
  }

  render() {
    const { value } = this.state

    return (
      <Editor
        ref={this.$vm}
        value={value}
        addImg={($file) => this.addImg($file)}
        onChange={value => this.handleChange(value)}
      />
    )
  }
}
export default ForEditor;
// module.exports = {
//   ForEditor,
// } 



/* 
export default function ForEditor() {
  const [value, setValue] = useState('');
  
 function  handleChange(value){
    setValue(()=>{value})
  }

  return (
    <>
      <Editor value={value} onChange={() => handleChange()} />
    </>
  )
}
 */
