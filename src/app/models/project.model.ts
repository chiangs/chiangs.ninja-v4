export class Project {
  constructor(
    public name: string,
    public year?: number,
    public summary?: string,
    public technology?: string[],
    public roles?: string[],
    public contributions?: string,
    public url?: string,
    public repoUrl?: string,
    public projectImageUrl?: string,
    public designImageUrl?: string
  ) {
    this.name = name || `Project Name Needed`;
    this.year = year || null;
    this.summary = summary || ``;
    this.technology = technology || [];
    this.roles = roles || [];
    this.contributions = contributions || ``;
    this.url = url || ``;
    this.repoUrl = repoUrl || ``;
    this.projectImageUrl = projectImageUrl || ``;
    this.designImageUrl = designImageUrl || ``;
  }
}
