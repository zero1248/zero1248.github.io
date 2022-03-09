// A local search script with the help of hexo-generator-search
// Copyright (C) 2015 
// Joseph Pan <http://github.com/wzpan>
// Shuhao Mao <http://github.com/maoshuhao>
// This library is free software; you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as
// published by the Free Software Foundation; either version 2.1 of the
// License, or (at your option) any later version.
// 
// This library is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Lesser General Public License for more details.
// 
// You should have received a copy of the GNU Lesser General Public
// License along with this library; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
// 02110-1301 USA
// 

var searchFunc = function (path, search_id, content_id) {
    'use strict'; //使用严格模式
    var BTN = "<i id='local-search-close'>x</i>";
    $.ajax({
        url: path,
        dataType: "xml",
        success: function (xmlResponse) {
            // 从 xml 中获取相应的标题等数据
            var datas = $("entry", xmlResponse).map(function () {
                return {
                    title: $("title", this).text(),
                    content: $("content", this).text(),
                    url: $("url", this).text()
                };
            }).get();

            // ID 选择器
            var $input = document.getElementById(search_id);
            var $resultContent = document.getElementById(content_id);

            $input.addEventListener('input', function () {
                var str = '<ul class=\"search-result-list\">';
                var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
                $resultContent.innerHTML = "";
                if (this.value.trim().length <= 0) {
                    return;
                }
                // 本地搜索主要部分
                datas.forEach(function (data) {
                    var isMatch = true;
                    var content_index = [];
                    if (!data.title || data.title.trim() === '') {
                        data.title = "Untitled";
                    }
                    var data_title = data.title.trim().toLowerCase();
                    var data_content = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
                    var data_url = data.url;
                    var index_title = -1;
                    var index_content = -1;
                    var first_occur = -1;
                    // 只匹配非空文章
                    if (data_title != '' && data_content !== '') {
                        keywords.forEach(function (keyword, i) {
                            index_title = data_title.indexOf(keyword);
                            index_content = data_content.indexOf(keyword);

                            if (index_title < 0 && index_content < 0) {
                                isMatch = false;
                            } else {
                                if (index_content < 0) {
                                    index_content = 0;
                                }
                                if (i == 0) {
                                    first_occur = index_content;
                                }
                                // content_index.push({index_content:index_content, keyword_len:keyword_len});
                            }
                        });
                    } else {
                        isMatch = false;
                    }
                    // 返回搜索结果
                    if (isMatch) {
                        // 结果标签
                        // str += "<li><a href='" + data_url.slice(2) +
                        str = "<li><a href='" + "zero1248.github.io/" + data_url.slice(2) +
                        // str += "<li><a href='" + "zero1248.github.io/" + data_url.slice(2) +
                        // str += "<li><a href='" + data_url +
                            // "' class='search-result-title' target='_blank'>" + "> " + data_title + "</a>";
                        "' class='search-result-title'>" + data_title + "</a>";
                        var content = data.content.trim().replace(/<[^>]+>/g, "");
                        if (first_occur >= 0) {
                            // 拿出含有搜索字的部分
                            var start = first_occur - 20;
                            var end = first_occur + 80;

                            if (start < 0) {
                                start = 0;
                            }

                            if (start == 0) {
                                end = 100;
                            }

                            if (end > content.length) {
                                end = content.length;
                            }

                            var match_content = content.substr(start, end);

                            // 列出搜索关键字，定义class加高亮
                            keywords.forEach(function (keyword) {
                                var regS = new RegExp(keyword, "gi");
                                match_content = match_content.replace(regS,
                                    "<em class=\"search-keyword\">" +
                                    keyword + "</em>");
                            });

                            str += "<p class=\"search-result\">" + match_content +
                                "...</p>"
                        }
                        str += "</li>";
                    }
                });
                str += "</ul>";
                if (str.indexOf('<li>') === -1) {
                    return $resultContent.innerHTML = BTN +
                        "<ul><span class='local-search-empty'>没有找到内容，更换下搜索词试试吧~<span></ul>";
                }
                $resultContent.innerHTML = BTN + str;
            });
        }
    });
    $(document).on('click', '#local-search-close', function () {
        $('#local-search-input').val('');
        $('#local-search-result').html('');
    });
    $(document).on('focus', '#local-search', function () {
        $('#local-search-icon-search').html('❌');
        $('#local-search-icon-search').attr('id', 'local-search-icon-close');
        //console.log("66666");
    });
    $(document).on('click', '#local-search-icon-close', function () {
        $('#local-search-input').val('');
        $('#local-search-result').html('');
        $('#local-search-icon-close').html('🔍');
        $('#local-search-icon-close').attr('id', 'local-search-icon-search');
        //console.log("1111");
    });
}