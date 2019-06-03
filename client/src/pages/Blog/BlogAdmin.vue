<template>
    <div id="wrapper" class="full" style="height: 258px;">
        <div id="content" class="max" style="height: 259px;">
            <div class="tables">
                <div class="panel panel-default">
                    <div class="panel-heading">Danh Sách Blog</div>
                    <div class="row tableContainer">
                        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                            <router-link :to="{name: 'BlogAdd'}" class="btn btn-sm btn-blue mb5"><span class="icon-drawer"></span> Đăng Bài</router-link>
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
                                <input type="text" id="myInput" class="form-control" placeholder="Search...">
                                <span class="input-group-btn"><a class="btn btn-sm btn-green"><span class="icon-magnifier"></span></a></span>
                            </div>
                        </div>
                    </div>
                    <div class="table-overflow">
                        <table id="example" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,800</td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>Tokyo</td>
                                    <td>63</td>
                                    <td>2011/07/25</td>
                                    <td>$170,750</td>
                                </tr>
                                <tr>
                                    <td>Ashton Cox</td>
                                    <td>Junior Technical Author</td>
                                    <td>San Francisco</td>
                                    <td>66</td>
                                    <td>2009/01/12</td>
                                    <td>$86,000</td>
                                </tr>
                                <tr>
                                    <td>Cedric Kelly</td>
                                    <td>Senior Javascript Developer</td>
                                    <td>Edinburgh</td>
                                    <td>22</td>
                                    <td>2012/03/29</td>
                                    <td>$433,060</td>
                                </tr>
                                <tr>
                                    <td>Airi Satou</td>
                                    <td>Accountant</td>
                                    <td>Tokyo</td>
                                    <td>33</td>
                                    <td>2008/11/28</td>
                                    <td>$162,700</td>
                                </tr>
                                <tr>
                                    <td>Brielle Williamson</td>
                                    <td>Integration Specialist</td>
                                    <td>New York</td>
                                    <td>61</td>
                                    <td>2012/12/02</td>
                                    <td>$372,000</td>
                                </tr>
                                <tr>
                                    <td>Herrod Chandler</td>
                                    <td>Sales Assistant</td>
                                    <td>San Francisco</td>
                                    <td>59</td>
                                    <td>2012/08/06</td>
                                    <td>$137,500</td>
                                </tr>
                                <tr>
                                    <td>Rhona Davidson</td>
                                    <td>Integration Specialist</td>
                                    <td>Tokyo</td>
                                    <td>55</td>
                                    <td>2010/10/14</td>
                                    <td>$327,900</td>
                                </tr>
                                <tr>
                                    <td>Colleen Hurst</td>
                                    <td>Javascript Developer</td>
                                    <td>San Francisco</td>
                                    <td>39</td>
                                    <td>2009/09/15</td>
                                    <td>$205,500</td>
                                </tr>
                                <tr>
                                    <td>Sonya Frost</td>
                                    <td>Software Engineer</td>
                                    <td>Edinburgh</td>
                                    <td>23</td>
                                    <td>2008/12/13</td>
                                    <td>$103,600</td>
                                </tr>
                                <tr>
                                    <td>Jena Gaines</td>
                                    <td>Office Manager</td>
                                    <td>London</td>
                                    <td>30</td>
                                    <td>2008/12/19</td>
                                    <td>$90,560</td>
                                </tr>
                                <tr>
                                    <td>Quinn Flynn</td>
                                    <td>Support Lead</td>
                                    <td>Edinburgh</td>
                                    <td>22</td>
                                    <td>2013/03/03</td>
                                    <td>$342,000</td>
                                </tr>
                                
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                </tr>
                            </tfoot>
                        </table>  
                    </div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</template>

<script>

$(document).ready(function() {
    var table = $('#example').DataTable();

    $('#example_filter').hide();

    $('#example_length').hide();

    $('#example_info').hide();
    
    $('#myInput').on( 'keyup', function () {
        table.search(this.value).draw();
    } );
} );
    
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

.panel .table-overflow {
    /* margin-bottom: 0; */
    margin: 10px;
}

</style>
