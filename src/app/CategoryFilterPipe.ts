// CategoryFilterPipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
  transform(items: any[], selectedCategory: any): any[] {
    if (!selectedCategory || !selectedCategory.id) {
      return items;
    }
    return items.filter(item => item.competenceCategory.id === selectedCategory);
  }
}
