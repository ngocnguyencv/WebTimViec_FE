export class ImageSnippet {
  src: string;
  file: File;
  pending: boolean = false;
  status: string = 'init';

  constructor(src: string, file: File) {
    this.src = src;
    this.file = file;
  }
}
