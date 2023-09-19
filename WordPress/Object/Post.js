export default class Post {
  
  constructor(post) {
    this.post = post;
  }

  getLink() {
    return this.post.link_url + '/' + this.post.slug;
  }

  getImageUrl() {

    if (this.post['_embedded'] && this.post['_embedded']['wp:featuredmedia']) {
      if (this.post['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']) {
        let sizes = this.post['_embedded']['wp:featuredmedia'][0]['media_details']['sizes'];

        /**
         *
         */
        if (sizes['blog_post']) {
          return sizes['blog_post']['source_url'];
        }
      }
    }

    return '';
  }

  getTitle() {
    return this.post.title.rendered;
  }

  getDate() {
    return this.post.date_gmt;
  }

  getExcerpt() {
    return this.post.excerpt.rendered;
  }

  getRawJson() {
    return this.post;
  }
}