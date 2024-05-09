import { Component } from '@angular/core';
import * as data from '../../assets/data.json'
import { Group, Operator } from './Data.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'rxjs-docs',
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.scss'
})
export class DocsComponent {
  operatorGroups: Group[] = data.groups.map((group: Group) => {
    return {
      ...group,
      operators: group.operators.map((operator: Operator) => {
        return {
          ...operator,
          parent: group.value
        }
      })
    }
  })
  hasData = true
  mdContent = ''
  title = ''
  mdUrl = ''

  constructor(private http: HttpClient) {

  }
  onSelectOperator(operator: Operator) {
    this.title = operator.value
    this.mdUrl = `./assets/tutorials/${operator.parent}/${operator.value}.md`
  }

  onLoad(event: any) {
    this.hasData = true;
  }

  onError(event: any) {
    this.hasData = false;
  }
}
