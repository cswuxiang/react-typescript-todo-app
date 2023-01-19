import { autorun, makeAutoObservable, observable } from "mobx"
import { observer } from "mobx-react"
import React from "react"

// Model the application state.
class Timer {
  secondsPassed = 0

  constructor() {
    makeAutoObservable(this)
  }

  increase() {
    this.secondsPassed += 1
  }

  reset() {
    this.secondsPassed = 0
  }
}

const myTimer = new Timer()

// Build a "user interface" that uses the observable state.
const TimerView = observer(({ timer }: any) => {
  let xx = 3;
  return <button onClick={() => timer.reset()}>Seconds passed: {timer.secondsPassed}</button>
});
export default function () {
  return <TimerView timer={myTimer} />
}



// Update the 'Seconds passed: X' text every second.
setInterval(() => {
  myTimer.increase()
}, 1000)

const person = observable({
  age: 20
})

autorun(() => {
  debugger;
  // console.log("age", myTimer.age);
});

