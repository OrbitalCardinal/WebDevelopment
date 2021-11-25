import { Component } from 'react';
import Sketch from 'react-p5';
import styles from './P5Background.module.css';

class P5Background extends Component {
    constructor(props) {
        super(props);
        this.state = {windowWidth: window.innerWidth, windowHeight: window.innerHeight};
    }

    setup = (p5, parent) => {
        
        p5.createCanvas(this.state.windowWidth, this.state.windowHeight - 4).parent(parent);
        
        // Global p5 variables
        p5.width = this.state.windowWidth;
        p5.midWidth = p5.width / 2;
        p5.height = this.state.windowHeight;
        p5.midHeight = p5.height / 2;
        p5.x = 0;
        p5.y = 0;
        p5.xArray = [];
        p5.yArray = [];
        p5.n = 100;
        p5.lastMouseX = 0;
        p5.lastMouseY = 0;
        p5.randomSeed(new Date());
        p5.nPaths = p5.floor(p5.random(4,16)); 
    }

    
    draw = p5 => {
        // p5.push();
        // let x = this.r * p5.sin(this.a);
        // let y = this.r * p5.cos(this.a);
        // p5.fill(255);
        // p5.ellipse(x, y, 20,20);
        // p5.ellipse(x, y, 20,20);
        // p5.noFill();
        // p5.stroke(255);
        // this.a = this.a + 0.05;
        // p5.ellipse(0,0,this.r * 2,this.r * 2);
        // p5.pop();
        
        p5.translate(p5.midWidth, p5.midHeight);
        p5.background(0);
        p5.angleMode(p5.DEGREES);
        p5.n = 100;
        let size = 15;
        // p5.rotate(360);
        for(let path=0; path < p5.nPaths; path++) {
            for(let i=0; i<p5.n; i++) {
                let length = p5.xArray.length;
                let h = 190 + ((255 - 175) / p5.n) * i;
                let s = 255;
                let b = 100;
                p5.noStroke();
                p5.colorMode(p5.HSB);
                p5.fill(h,s,b);
                let relativeSize = size - ((size / p5.n * 2) * i);
                p5.ellipse(p5.xArray[length - i], p5.yArray[length - i], relativeSize,relativeSize);
            }
            p5.rotate(360 / p5.nPaths);
        }
        
        
    }

    mouseMoved = p5 => {
        p5.xArray.push(p5.midWidth - p5.mouseX);
        p5.yArray.push(p5.midHeight - p5.mouseY);        
        return false;
    }

    render() {
        return(
            <div className={styles.container}>
                <Sketch setup={this.setup} draw={this.draw} mouseMoved={this.mouseMoved}></Sketch>
            </div>
        );
    }
}

export default P5Background;