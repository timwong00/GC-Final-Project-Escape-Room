import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SoundeffectService {
  apiurl = "https://freesound.org/apiv2/sounds";
  apikey = "?token=iiUhsGYnfh0aoVwFkiwBB1xqtAQj3Bpt2hPcPTq2";

  heartbeat: any;
  soundeffect: any;
  heartbeatSoundURL: any;
  bgm: any;
  bgmURL: any;
  creepyAmbient: any;
  glassBreak: any;
  glassBreakURL: any;
  cutDoorHandle: any;
  cutDoorHandleURL: any;
  keyCode: any;
  keyCodeURL: any;

  constructor(private http: HttpClient) {}

  getHeartbeat() {
    return this.http.get(`${this.apiurl}` + "/332812/" + `${this.apikey}`);
  }

  getCreepyAmbient() {
    return this.http.get(`${this.apiurl}` + "/366887/" + `${this.apikey}`);
  }

  getBreakWindow() {
    return this.http
      .get(`${this.apiurl}` + "/203371/" + `${this.apikey}`)
      .subscribe(response => {
        this.soundeffect = response;
        this.glassBreakURL = this.soundeffect.previews["preview-hq-mp3"];
        this.glassBreak = new Audio(this.glassBreakURL);
      });
  }

  getCutDoorHandle() {
    return this.http
      .get(`${this.apiurl}` + "/185608/" + `${this.apikey}`)
      .subscribe(response => {
        this.soundeffect = response;
        this.cutDoorHandleURL = this.soundeffect.previews["preview-hq-mp3"];
        this.cutDoorHandle = new Audio(this.cutDoorHandleURL);
      });
  }

  getKeyCode() {
    return this.http
      .get(`${this.apiurl}` + "/262277/" + `${this.apikey}`)
      .subscribe(response => {
        this.soundeffect = response;
        this.keyCodeURL = this.soundeffect.previews["preview-hq-mp3"];
        this.keyCode = new Audio(this.keyCodeURL);
      });
  }

  playLowHeartbeat() {
    this.getHeartbeat().subscribe(response => {
      this.soundeffect = response;
      this.heartbeatSoundURL = this.soundeffect.previews["preview-hq-mp3"];
      this.heartbeat = new Audio(this.heartbeatSoundURL);
      this.heartbeat.volume = 0.3;
      this.heartbeat.play();
      this.heartbeat.loop = true;
    });
  }

  playMidHeartbeat() {
    this.heartbeat.volume = 0.6;
    this.heartbeat.play();
    this.heartbeat.loop = true;
  }

  playHighHeartbeat() {
    this.heartbeat.volume = 1;
    this.heartbeat.play();
    this.heartbeat.loop = true;
  }

  stopHeartbeat() {
    // this.heartbeat.loop = false;
    this.heartbeat.pause();
    this.heartbeat.currentTime = 0;
  }

  playHighCreepyAmbient() {
    this.getCreepyAmbient().subscribe(response => {
      this.bgm = response;
      this.bgmURL = this.bgm.previews["preview-hq-mp3"];
      this.creepyAmbient = new Audio(this.bgmURL);
      this.creepyAmbient.volume = 1;
      this.creepyAmbient.play();
      this.creepyAmbient.loop = true;
    });
  }

  playMidCreepyAmbient() {
    this.creepyAmbient.volume = 0.4;
    this.creepyAmbient.play();
    this.creepyAmbient.loop = true;
  }

  playLowCreepyAmbient() {
    this.creepyAmbient.volume = 0.1;
    this.creepyAmbient.play();
    this.creepyAmbient.loop = true;
  }

  stopCreepyAmbient() {
    // this.creepyAmbient.loop = false;
    this.creepyAmbient.pause();
    this.creepyAmbient.currentTime = 0;
  }

  playGlassBreak() {
    this.glassBreak.play();
  }

  playCutDoorHandle() {
    this.cutDoorHandle.play();
  }

  playKeyCode() {
    this.keyCode.currentTime = 1.2;
    this.keyCode.play();
    setTimeout(() => {
      this.keyCode.pause();
    }, 3000);
  }
}
