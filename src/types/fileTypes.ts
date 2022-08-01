export interface FileModel {
  id: number;
  isDirectory: boolean;
  name: string;
  children?: FileModel[];
  content?: string;
  initialContent?: string;
  level?: number;
  alreadySaved?: boolean;
}
