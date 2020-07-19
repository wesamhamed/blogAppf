import { Component, OnInit } from '@angular/core';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  tags;
  constructor(private tagsService: TagsService) {
    this.tagsService.getTags().subscribe((data) => {
      this.tags = data;
    });
  }

  ngOnInit(): void {}


  deleteTag(id){
    this.tagsService.deleteTag(id).subscribe(()=>{
        this.tags =  this.tags.filter(t=>t.id != id);
    })
  }
}
