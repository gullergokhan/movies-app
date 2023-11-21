export interface ReviewRoot {
    id: number;
    page: number;
    results: ReviewResult[];
    total_pages: number;
    total_results: number;
  }
  
  export interface ReviewResult {
    author: string;
    author_details: AuthorDetails;
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
  }
  
  export interface AuthorDetails {
    name: string;
    username: string;
    avatar_path?: string;
    rating: number;
  }
  export interface CreditsRoot {
    id: number;
    cast: ReviewModel[];
  }
  
  export interface ReviewModel {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path?: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
  }
  