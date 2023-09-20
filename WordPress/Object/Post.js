module.exports = class Post {
  
  constructor(post) {
    this.post = post;
  }

  getLink() {
    return this.post.link_url + '/' + this.post.slug;
  }

  getImageUrl(size = 'small', fallback = 'https://wp.rossedlin.com/wp-content/uploads/2020/05/home-office-4980353-400x266.jpg') {

    if (this.post['_embedded'] && this.post['_embedded']['wp:featuredmedia']) {
      if (this.post['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']) {
        let sizes = this.post['_embedded']['wp:featuredmedia'][0]['media_details']['sizes'];

        /**
         *
         */
        if (sizes[size]) {
          return sizes[size]['source_url'];
        }
      }
    }

    return fallback;
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