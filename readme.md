推送方式：

1、备份主分支

执行 `hexo g -d` 或者先执行 `hexo g`，再执行 `hexo d`，会自动把生成的博客网页上传到主分支（master）。



2、备份源文件分支

假设源文件分支名为 hexo（使用 `git branch -l` 可以查看分支）。

切换到 hexo 分支：`git checkout hexo`

执行：

`git add .`

`git commit -m "备注信息"`

`git push origin hexo`