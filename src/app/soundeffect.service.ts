import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SoundeffectService {
  apiurl = "https://freesound.org/apiv2/sounds";
  apikey = "?token=iiUhsGYnfh0aoVwFkiwBB1xqtAQj3Bpt2hPcPTq2";

  heartbeat: any;
  constructor(private http: HttpClient) {}

  getHeartbeat() {
    return this.http.get(`${this.apiurl}` + "/332812/" + `${this.apikey}`);
  }

  getBreakWindow() {
    return this.http.get(`${this.apiurl}` + "/448004/" + `${this.apikey}`);
  }
}