import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
@Input() result:any;
@Output() output:EventEmitter<any>=new EventEmitter();
  constructor(public dialog:MatDialog) { }
  ngOnInit() { 
    this.output.emit(); 
  }
}
