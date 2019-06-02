<template>
<div id="wrapper" class="full" style="height: 258px;">
    <div id="content" class="max" style="height: 259px;">
        <div class="tables">
            <h4>Tables</h4>
            <div class="panel panel-default">
                <div class="panel-heading">Inbox</div>
                <div class="row tableContainer">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <a href="#" class="btn btn-sm btn-blue mb5"><span class="icon-drawer"></span> Archive</a>
                        <a href="#" class="btn btn-sm btn-yellow mb5"><span class="icon-ban"></span> Report Spam</a>
                        <a href="#" class="btn btn-sm btn-red mb5"><span class="icon-trash"></span> Delete</a>
                        <div class="btn-group mb5">
                            <a data-toggle="dropdown" class="btn btn-sm btn-gray dropdown-toggle">
                                <span class="dropdown-label">Bulk Actions</span> <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Mark as read</a></li>
                                <li><a href="#">Mark as unread</a></li>
                                <li><a href="#">Mark as important</a></li>
                                <li><a href="#">Mark as not important</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <div class="input-group input-group-sm mb5">
                            <input type="text" class="form-control" placeholder="Search...">
                            <span class="input-group-btn"><a class="btn btn-sm btn-green"><span class="icon-magnifier"></span></a></span>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <div class="btn-group pull-right mb5">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-o btn-gray dropdown-toggle" data-toggle="dropdown">
                                1-50 of 121
                                <span class="caret"></span>
                                </button>
                                <ul class="dropdown-menu" role="menu">
                                    <li class="disabled"><a href="#">Newest</a></li>
                                    <li><a href="#">Oldest</a></li>
                                </ul>
                            </div>
                            <button type="button" class="btn btn-sm btn-gray"><span class="fa fa-angle-left"></span></button>
                            <button type="button" class="btn btn-sm btn-gray"><span class="fa fa-angle-right"></span></button>
                        </div>
                    </div>
                </div>
                <div class="table-overflow">
                    <table class="table tablesorter tablesorter-default" id="inboxTable" role="grid">
                        <thead>
                            <tr role="row" class="tablesorter-headerRow">
                                <th style="width: 10px; user-select: none;" data-column="0" class="tablesorter-header sorter-false tablesorter-headerUnSorted" tabindex="0" scope="col" role="columnheader" aria-disabled="true" unselectable="on" aria-sort="none"><div class="tablesorter-header-inner"><input type="checkbox"></div></th>
                                <th style="width: 10px; user-select: none;" data-column="1" class="tablesorter-header sorter-false tablesorter-headerUnSorted" tabindex="0" scope="col" role="columnheader" aria-disabled="true" unselectable="on" aria-sort="none"><div class="tablesorter-header-inner"><span class="fa fa-star-o"></span></div></th>
                                <th data-column="2" class="tablesorter-header tablesorter-headerUnSorted" tabindex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="inboxTable" unselectable="on" aria-sort="none" aria-label=" FROM: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner"><span class="fa fa-sort sortIcon"></span><span class="fa fa-caret-up sortIconAsc"></span><span class="fa fa-caret-down sortIconDesc"></span> FROM</div></th>
                                <th data-column="3" class="tablesorter-header tablesorter-headerUnSorted" tabindex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="inboxTable" unselectable="on" aria-sort="none" aria-label=" SUBJECT: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner"><span class="fa fa-sort sortIcon"></span><span class="fa fa-caret-up sortIconAsc"></span><span class="fa fa-caret-down sortIconDesc"></span> SUBJECT</div></th>
                                <th style="width: 100px; user-select: none;" data-column="4" class="tablesorter-header sorter-false tablesorter-headerUnSorted" tabindex="0" scope="col" role="columnheader" aria-disabled="true" unselectable="on" aria-sort="none"><div class="tablesorter-header-inner">DATE</div></th>
                            </tr>
                        </thead>
                        <tbody class="table" aria-live="polite" aria-relevant="all">
                            <tr role="row">
                                <td><input type="checkbox"></td>
                                <td><span class="fa fa-star-o text-yellow"></span></td>
                                <td>John Smith</td>
                                <td>Modern Residence in New York</td>
                                <td>6:07 pm</td>
                            </tr>
                            <tr role="row">
                                <td><input type="checkbox"></td>
                                <td><span class="fa fa-star-o text-yellow"></span></td>
                                <td>Jane Smith</td>
                                <td>Hauntingly Beautiful Estate</td>
                                <td>Sep 27</td>
                            </tr>
                            <tr role="row">
                                <td><input type="checkbox"></td>
                                <td><span class="fa fa-star-o text-yellow"></span></td>
                                <td>Rust Cohle</td>
                                <td>Sophisticated Residence</td>
                                <td>Sep 25</td>
                            </tr>
                            <tr role="row">
                                <td><input type="checkbox"></td>
                                <td><span class="fa fa-star-o text-yellow"></span></td>
                                <td>Antony Iglesias</td>
                                <td>House With a Lovely Glass Roof</td>
                                <td>Sep 23</td>
                            </tr>
                            <tr role="row">
                                <td><input type="checkbox"></td>
                                <td><span class="fa fa-star-o text-yellow"></span></td>
                                <td>John Smith</td>
                                <td>Modern Residence in New York</td>
                                <td>Sep 21</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="clearfix"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#wrapper {
    left: 70px;
    top: 60px;
    margin: 60px 0 0 90px;
    /* padding: 20px; */
}
</style>
