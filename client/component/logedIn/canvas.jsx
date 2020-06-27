// this is where we need to connect to socket
import React, { Component } from 'react';
import CanvasDraw from 'react-canvas-draw';

export default class Canvas extends Component {
    constructor(){
        super()
        this.state={
            data:{}
        }
        this.onchange=this.onchange.bind(this)
    }
    onchange (e) {
        let data =CanvasDraw.getSaveData()
        console.log(data)
    }
    
    

    render() {
        return (
            <div >
            <div >
            <button
              onClick={() => {
                  localStorage.setItem("savedDrawing",this.saveableCanvas.getSaveData());
                //   console.log(this.saveableCanvas.getSaveData())
                  const data =this.saveableCanvas.getSaveData()
                  console.log(data)
                  this.setState({data})
                  console.log(this.state)
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                this.saveableCanvas.clear();
              }}
            >
              Clear
            </button>
            <button
              onClick={() => {
                this.saveableCanvas.undo();
              }}
            >
              Undo
            </button>
            <div>
              <label>Width:</label>
              <input
                type="number"
                value={this.state.width}
                onChange={e =>
                  this.setState({ width: parseInt(e.target.value, 10) })
                }
              />
            </div>
            <div>
              <label>Height:</label>
              <input
                type="number"
                value={this.state.height}
                onChange={e =>
                  this.setState({ height: parseInt(e.target.value, 10) })
                }
              />
            </div>
            <div>
              <label>Brush-Radius:</label>
              <input
                type="number"
                value={this.state.brushRadius}
                onChange={e =>
                  this.setState({ brushRadius: parseInt(e.target.value, 10) })
                }
              />
            </div>
            <div>
              <label>Lazy-Radius:</label>
              <input
                type="number"
                value={this.state.lazyRadius}
                onChange={e =>
                  this.setState({ lazyRadius: parseInt(e.target.value, 10) })
                }
              />
            </div>
          </div>
          <CanvasDraw
            ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
            brushColor={this.state.color}
            brushRadius={this.state.brushRadius}
            lazyRadius={this.state.lazyRadius}
            canvasWidth={this.state.width}
            canvasHeight={this.state.height}
          />
          <button
          onClick={() => {
            this.loadableCanvas.loadSaveData(
              localStorage.getItem("savedDrawing")
            );
          }}
        >
          Load what you saved previously into the following canvas. Either by
          calling `loadSaveData()` on the component's reference or passing it
          the `saveData` prop:
        </button>
        <CanvasDraw
          disabled
          hideGrid
          ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
          saveData={localStorage.getItem("savedDrawing")}
        />
            </div>
        )
    }
}


