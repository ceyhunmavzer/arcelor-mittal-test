import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hourglass } from '../../models/Hourglass';
import { HourglassResponse } from '../../models/HourGlassResponse';
import { HourGlassService } from '../../services/hourglass.service';

@Component({
  selector: 'app-hourglass',
  templateUrl: './hourglass.component.html',
  styleUrls: ['./hourglass.component.scss']
})
export class HourglassComponent implements OnInit {
  returnValue: string | undefined;
  data = new FormControl('');
  constructor( private hourGlassService : HourGlassService) { }

  ngOnInit(): void {

  }

  calculate(): void{
    // const data :Hourglass  ={
    //   data:[
    //   [
    //     0,0,1,7,1,1
    //   ],
    //   [
    //     0,0,1,1,1,1
    //   ],
    //   [
    //     0,0,1,1,1,1
    //   ],
    //   [
    //     0,0,1,1,1,1
    //   ],
    //   [
    //     0,0,1,1,1,1
    //   ],
    //   [
    //     0,0,1,1,1,1
    //   ]
    // ]};
    const dataInput = this.data.value;
    console.log('data input:', dataInput);
    // mocked input because we need a parsing for data input
    const mockedInput: number[][] = 
     [
      [
        0,0,1,7,1,1
      ],
      [
        0,0,1,1,1,1
      ],
      [
        0,0,1,1,1,1
      ],
      [
        0,0,1,1,1,1
      ],
      [
        0,0,1,1,1,1
      ],
      [
        0,0,1,1,1,1
      ]
     ];
    const hourGlass : Hourglass = {
      data: mockedInput
    }
    this.hourGlassService.getCalculation(hourGlass)
      .subscribe((res: HourglassResponse)=>
        {this.returnValue = res.response}
        );
  }



}
