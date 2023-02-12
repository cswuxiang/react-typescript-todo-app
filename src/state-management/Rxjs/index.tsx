import React from "react";
import { of } from 'rxjs';



export default function () {
  return <div>234234 </div>
}
const source$ = of(1, 2, 3)
source$.subscribe(console.log)