// Authentication interface for BuildWithAbdou, defining user data structure
export interface Auth {
  preferred_username: string;
  picture: string;
  name: string;
  isLocalUse?: boolean;
}
