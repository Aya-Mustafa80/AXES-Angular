import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AxisServicesService {
  private _GetALLProjects =
    'https://axes.onrender.com/api/projects/?filters[category][$eq]=${Cat}&populate=*';
  private _GetOneProject =
    'https://axes.onrender.com/api/projects/${id}?populate=*';
  constructor(private http: HttpClient) {}

  getData(Cat: string) {
    return this.http.post<any>(this._GetALLProjects, Cat);
  }
  getProject(id: number | undefined) {
    return this.http.post<any>(this._GetOneProject, id);
  }
}
