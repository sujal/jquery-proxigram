/*
 * jquery.proxigram.js
 * Copyright 2012 Forche LLC
 *
 * Significant portions inspired by jquery.instagram.js
 * https://github.com/potomak/jquery-instagram
 *
 */
 
(function($){
 
  $.fn.proxigram = function(options) {
    var that = this,
          settings = {
            apiEndpoint = "http://proxigram.com/api/photos",
            access_token: null,
            limit: 30,
            include_raw: "no",
            include_default_styles: true,
            complete: null,
            instagram_id: null
          };

    options && $.extend(settings, options);
        
    function createImageElement(image) {
      return $('<div>')
        .addClass('proxigram-image-wrapper')
        .attr('id', image._id)
        .append(
          $('<div>')
          .addClass('proxigram-image')
          .append(
            $('<a>')
              .attr('href', image.link)
              .append(
                $('<img>')
                  .addClass('proxigram-image')
                  .attr('src', image.images.thumbnail.url)
                  .attr('alt', "image by " + image.source_user.full_name )
              ) 
          )
        )
        .append(
          $('<div>')
            .addClass('proxigram-caption')
            .text(image.caption)
        ).append(
          $('<div>')
            .addClass('proxigram-meta')
            .append (
              $('<span>')
                .addClass('proxigram-like-count')
                .text(image.likes_count + " likes")
            )
            .append (
              $('<span>')
                .addClass('proxigram-comment-count')
                .text(image.comment_count + " comments")
            )
        );
    }
  
    $.ajax(settings.apiEndpoint, {
      type: "GET",
      dataType
    })
      .done(
      )
      .fail(
      )
      .always(
      );
  
  }
)(jQuery);