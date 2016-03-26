/*公共函数和方法*/

//分页  (当前页,总条数,每页显示条数,当前页前后显示页数)
function nextPage(pageIndex, total, pageSize, temp) {
    var ReturnHtml = "";
    pageIndex = parseInt(pageIndex);
    total = parseInt(total);
    pageSize = parseInt(pageSize);
    temp = parseInt(temp);
    if (total == 0)
        return ReturnHtml;
    //计算总页数
    var pageCount = 0;
    if (total % pageSize == 0)
        pageCount = parseInt(total / pageSize);
    else
        pageCount = parseInt(total / pageSize) + 1;

    //计算当前位置
    ReturnHtml += "<div class='u-fl'><span class='u_fw'>" + total + "</span>条记录<span class='u_fw'>" + pageCount + "</span>页</div><div class='u-fr'>"

    //1    上一页 首页
    if (pageIndex == 1)
        ReturnHtml += "<a class='pa_disabled' title='上一页' href='javascript:void(0)'></a>";
    else
        ReturnHtml += "<a class='pa_disabled' title='上一页' k='" + (pageIndex - 1) + "' href='javascript:void(0)'></a><a href='javascript:void(0)' k='1' class='s-def'>1</a>";

    //2    ...
    if (pageIndex > temp + 2)
        ReturnHtml += "<a href='javascript:void(0)' k='"+(pageIndex-4)+"' class='s-def'>...</a>";
    //3    本页前页码
    var frontPage = "";
    for (var i = pageIndex - 1; i > pageIndex - (temp + 1) && i > 1; i--)
    {
        frontPage = "<a href='javascript:void(0)' k='"+i+"' class='s-def'>"+i+"</a>" + frontPage;
    }
    ReturnHtml += frontPage;
    
    //4    本页页码
    ReturnHtml += "<a href='javascript:void(0)' class='s-def t'>"+pageIndex+"</a>";

    //5    页后页码
    for (var i = pageIndex + 1; i < pageIndex + (temp + 1) && i < pageCount; i++)
        ReturnHtml += "<a href='javascript:void(0)' k='"+i+"' class='s-def'>"+i+"</a>";

        //6    ...
    if (pageIndex + temp + 1 < pageCount)
        ReturnHtml += "<a href='javascript:void(0)' k='" + (pageIndex + temp + 1) + "' class='s-def'>...</a>";

        //7    尾页 下一页
    if (pageIndex == pageCount)
        ReturnHtml += "<a class='pg_enabled' title='下一页' href='javascript:void(0)'></a>";
    else
        ReturnHtml += "<a href='javascript:void(0)' k='"+pageCount+"' class='s-def'>"+pageCount+"</a><a class='pg_enabled' title='下一页' href='javascript:void(0)'  k='" + (pageIndex + 1) + "'></a>";
    ReturnHtml += "</div><div class='u-cls'></div>";

    return ReturnHtml;
}