import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-container',
  templateUrl: './scouter.component.html',
  styleUrls: ['./scouter.component.scss']
})
export class ScouterComponent implements OnInit {




  worker!: Worker;
  isLoading = false;
  progress = 0;


  constructor(
    private snackbar: MatSnackBar,
    private titleService: Title
  ) {
    this.titleService.setTitle(
      'MapleScouter - 환산 스탯 계산'
    );
  }


  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(
        new URL('../score.worker', import.meta.url)
      );
    } else {
      this.snackbar.open(
        'Web Worker가 지원되지 않는 브라우저입니다. 최신 브라우저를 사용해주세요.',
        '닫기'
      );
    }
    
  }



  

  
}
