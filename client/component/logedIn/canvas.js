import React, { Component } from 'react';

export default class Canvas extends Component {
    constructor () {
        
    }

    componentDidMount () {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        canvas.height = window.innerHeight * 0.8;
        canvas.width = canvas.height * 1.5;
        const fromTop = canvas.getBoundingClientRect().top;
        const fromLeft = canvas.getBoundingClientRect().left;
        let painting = false;
        function startPosition(e) {
            painting = true;
            draw(e);

            const x = (e.clientX - fromLeft) / canvas.width;
            const y = (e.clientY - fromTop) / canvas.height;
        
            socket.emit('down', { down: true, x, y });
            // socket.emit('down', { down: true, x: e.clientX, y: e.clientY });
        }
        function finishedPosition() {
            painting = false;
            ctx.beginPath();
            socket.emit('down', { down: false });
        }
        console.log(fromTop)
        function draw(e) {
            if (!painting) return;
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.strokeStyle = 'red';
            ctx.lineTo(e.clientX - fromLeft, e.clientY - fromTop);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX - fromLeft, e.clientY - fromTop);
            // emit event

            const x = (e.clientX - fromLeft) / canvas.width;
            const y = (e.clientY - fromTop) / canvas.height;
     
            socket.emit('mouse', { x, y });
            // socket.emit('mouse', { x: e.clientX, y: e.clientY });
        }
        canvas.addEventListener('mousedown', startPosition);
        canvas.addEventListener('mouseup', finishedPosition);
        canvas.addEventListener('mousemove', draw);
        const socket = io.connect('http://localhost:3000');
        let down = false;
        socket.on('down', (data) => {
          down = data.down;
          if (!data.down) ctx.beginPath();
          else down2(data);
        });
        socket.on('mouseback', down2);
        function down2(data) {
          console.log('123', data);
          // socket.on('connection', newConnection)
          if (!down) return;
          ctx.lineWidth = 3;
          ctx.lineCap = 'round';
          ctx.strokeStyle = 'red';

          ctx.lineTo(data.x * canvas.width , data.y * canvas.height);
        //   ctx.lineTo(data.x, data.y);
          // console.log(e.clientX, e.clientY);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(data.x * canvas.width , data.y * canvas.height);
        //   ctx.moveTo(data.x, data.y);
        }
    }

    render() {
        return (
            <div>
              <canvas id="canvas" style={{backgroundColor:'gray'}} />
            </div>
        )
    }
}


