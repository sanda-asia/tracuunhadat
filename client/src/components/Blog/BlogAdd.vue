<template>
    <div id="wrapper" class="full" style="height: 258px;">
        <div id="content" class="max" style="height: 259px;">
            <div class="tables">
                <h4>Form</h4>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="panel panel-default">
                            <div class="panel-heading">Basic Form</div>
                            <div class="panel-body">
                                <form role="form">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                                    </div>
                                    <div class="checkbox custom-checkbox"><label><input type="checkbox"><span class="fa fa-check"></span> Check me out</label></div>
                                    <a href="#" class="btn btn-green">Submit</a>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="panel panel-default">
                            <div class="panel-heading">Horizontal Form</div>
                            <div class="panel-body">
                                <form class="form-horizontal" role="form">
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
                                        <div class="col-sm-10">
                                            <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
                                        <div class="col-sm-10">
                                            <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                                            <p class="help-block"><a href="#">Forgot your password?</a></p>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-offset-2 col-sm-10">
                                            <div class="checkbox custom-checkbox"><label><input type="checkbox" checked="checked"><span class="fa fa-check"></span> Remember me</label></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-offset-2 col-sm-10">
                                            <a href="#" class="btn btn-o btn-green">Sign in</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">Inline Form</div>
                            <div class="panel-body">
                                <form class="form-inline" role="form">
                                    <div class="form-group">
                                        <label class="sr-only" for="exampleInputEmail2">Email address</label>
                                        <input type="email" class="form-control round" id="exampleInputEmail2" placeholder="Enter email">
                                    </div>
                                    <div class="form-group">
                                        <label class="sr-only" for="exampleInputPassword2">Password</label>
                                        <input type="password" class="form-control round" id="exampleInputPassword2" placeholder="Password">
                                    </div>
                                    <div class="checkbox custom-checkbox"><label><input type="checkbox"><span class="fa fa-check"></span> Remember me</label></div>
                                    <a href="#" class="btn btn-round btn-green">Sign in</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">Various Elements</div>
                            <div class="panel-body">
                                <form class="form-horizontal" role="form">
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Readonly</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" placeholder="Readonly input" readonly="readonly">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Rounded corners</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control round">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Static control</label>
                                        <div class="col-sm-10">
                                            <p class="form-control-static">Static control value here</p>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Textarea</label>
                                        <div class="col-sm-10">
                                            <textarea class="form-control" rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group has-success">
                                        <label class="col-sm-2 control-label">Input with success</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-group has-warning">
                                        <label class="col-sm-2 control-label">Input with warning</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-group has-error">
                                        <label class="col-sm-2 control-label">Input with error</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control">
                                            <p class="help-block">This field is required</p>
                                        </div>
                                    </div>
                                    <div class="form-group has-success has-feedback">
                                        <label class="col-sm-2 control-label">Input with success and feedback</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control">
                                            <span class="fa fa-check-circle form-control-feedback"></span>
                                        </div>
                                    </div>
                                    <div class="form-group has-warning has-feedback">
                                        <label class="col-sm-2 control-label">Input with warning and feedback</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control">
                                            <span class="fa fa-exclamation-circle form-control-feedback"></span>
                                        </div>
                                    </div>
                                    <div class="form-group has-error has-feedback">
                                        <label class="col-sm-2 control-label">Input with error and feedback</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control">
                                            <p class="help-block">This field is required</p>
                                            <span class="fa fa-times-circle form-control-feedback"></span>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Input group addon left</label>
                                        <div class="col-sm-10">
                                            <div class="input-group">
                                                <div class="input-group-addon">@</div>
                                                <input class="form-control" type="text">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Input group addon right</label>
                                        <div class="col-sm-10">
                                            <div class="input-group">
                                                <input class="form-control round" type="text">
                                                <div class="input-group-addon round">.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Input group button left</label>
                                        <div class="col-sm-10">
                                            <div class="input-group">
                                                <span class="input-group-btn">
                                                    <a href="#" class="btn btn-green">Go!</a>
                                                </span>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Input group button right</label>
                                        <div class="col-sm-10">
                                            <div class="input-group">
                                                <input type="text" class="form-control">
                                                <span class="input-group-btn">
                                                    <a href="#" class="btn btn-green">Go!</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Input group dropdown left</label>
                                        <div class="col-sm-10">
                                            <div class="input-group">
                                                <div class="input-group-btn">
                                                    <a href="#" class="btn btn-green dropdown-toggle" data-toggle="dropdown">
                                                    Action <span class="caret"></span>
                                                    </a>
                                                    <ul class="dropdown-menu" role="menu">
                                                        <li><a href="#">Action</a></li>
                                                        <li><a href="#">Another action</a></li>
                                                        <li><a href="#">Something else here</a></li>
                                                        <li class="divider"></li>
                                                        <li><a href="#">Separated link</a></li>
                                                    </ul>
                                                </div>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Input group dropdown right</label>
                                        <div class="col-sm-10">
                                            <div class="input-group">
                                                <input type="text" class="form-control">
                                                <div class="input-group-btn">
                                                    <a href="#" class="btn btn-green dropdown-toggle" data-toggle="dropdown">
                                                    Action <span class="caret"></span>
                                                    </a>
                                                    <ul class="dropdown-menu pull-right" role="menu">
                                                        <li><a href="#">Action</a></li>
                                                        <li><a href="#">Another action</a></li>
                                                        <li><a href="#">Something else here</a></li>
                                                        <li class="divider"></li>
                                                        <li><a href="#">Separated link</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Custom checkbox</label>
                                        <div class="col-sm-10">
                                            <div class="checkbox custom-checkbox"><label><input type="checkbox"><span class="fa fa-check"></span> Unchecked</label></div>
                                            <div class="checkbox custom-checkbox"><label><input type="checkbox" checked="checked"><span class="fa fa-check"></span> Checked</label></div>
                                            <div class="checkbox custom-checkbox"><label><input type="checkbox" disabled="disabled"><span class="fa fa-check"></span> Unchecked disabled</label></div>
                                            <div class="checkbox custom-checkbox"><label><input type="checkbox" checked="checked" disabled="disabled"><span class="fa fa-check"></span> Checked disabled</label></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Custom radio</label>
                                        <div class="col-sm-10">
                                            <div class="radio custom-radio"><label><input type="radio" name="radio1"><span class="fa fa-circle"></span> Unchecked</label></div>
                                            <div class="radio custom-radio"><label><input type="radio" name="radio1" checked="checked"><span class="fa fa-circle"></span> Checked</label></div>
                                            <div class="radio custom-radio"><label><input type="radio" disabled="disabled"><span class="fa fa-circle"></span> Unchecked disabled</label></div>
                                            <div class="radio custom-radio"><label><input type="radio" checked="checked" disabled="disabled"><span class="fa fa-circle"></span> Checked disabled</label></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Control sizing</label>
                                        <div class="col-sm-10">
                                            <input class="form-control input-lg" type="text" placeholder=".input-lg">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">&nbsp;</label>
                                        <div class="col-sm-10">
                                            <input class="form-control" type="text" placeholder="Default input">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">&nbsp;</label>
                                        <div class="col-sm-10">
                                            <input class="form-control input-sm" type="text" placeholder=".input-sm">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Slider</label>
                                        <div class="col-sm-3">
                                            <div class="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" id="slider1"><div class="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min" style="width: 49.4949%;"></div><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 49.4949%;" data-original-title="" title="" aria-describedby="tooltip377990"></span><div class="tooltip fade top in" role="tooltip" id="tooltip377990" style="top: -39.7969px; left: 159.313px; display: block;"><div class="tooltip-arrow"></div><div class="tooltip-inner">50</div></div></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">&nbsp;</label>
                                        <div class="col-sm-3">
                                            <div class="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" id="slider2"><div class="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-max" style="width: 30.303%;"></div><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 69.697%;" data-original-title="" title="" aria-describedby="tooltip293845"></span><div class="tooltip fade top in" role="tooltip" id="tooltip293845" style="top: -39.7969px; left: 229.563px; display: block;"><div class="tooltip-arrow"></div><div class="tooltip-inner">70</div></div></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Range slider</label>
                                        <div class="col-sm-3">
                                            <div class="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" id="slider3"><div class="ui-slider-range ui-widget-header ui-corner-all" style="left: 38%; width: 32%;"></div><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 38%;" data-original-title="" title="" aria-describedby="tooltip868875"></span><div class="tooltip fade top in" role="tooltip" id="tooltip868875" style="top: -39.7969px; left: 115.844px; display: block;"><div class="tooltip-arrow"></div><div class="tooltip-inner">190</div></div><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 70%;" data-original-title="" title="" aria-describedby="tooltip752562"></span><div class="tooltip fade top in" role="tooltip" id="tooltip752562" style="top: -39.7969px; left: 227.125px; display: block;"><div class="tooltip-arrow"></div><div class="tooltip-inner">350</div></div></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Dropdown select</label>
                                        <div class="col-sm-10">
                                            <div class="btn-group">
                                                <button data-toggle="dropdown" class="btn btn-o btn-gray dropdown-toggle">
                                                    <span class="dropdown-label">Option 1</span> <span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu dropdown-select">
                                                    <li class="active"><input type="radio" name="ds1" checked="checked"><a href="#">Option 1</a></li>
                                                    <li><input type="radio" name="ds1"><a href="#">Option 2</a></li>
                                                    <li><input type="radio" name="ds1"><a href="#">Option 3</a></li>
                                                    <li class="disabled"><input type="radio" name="ds1" disabled=""><a href="#">Option disabled</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Datepicker</label>
                                        <div class="col-sm-3">
                                            <input type="text" class="form-control" id="datepicker">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Autocomplete input</label>
                                        <div class="col-sm-4">
                                            <input type="text" class="form-control ui-autocomplete-input" id="autocomplete" placeholder="Enter a programming language..." autocomplete="off">
                                            <p class="help-block">The suggestions are tags for programming languages, give "ja" (for Java or JavaScript) a try.</p>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Switch</label>
                                        <div class="col-sm-10">
                                            <div class="checkbox switch">
                                                <label>
                                                    <input type="checkbox">
                                                    <span class="cs-place"><span class="fa fa-check cs-handler"></span></span>
                                                </label>
                                            </div>
                                            <div class="checkbox switch"><label><input type="checkbox" checked="checked"><span class="cs-place"><span class="fa fa-check cs-handler"></span></span></label></div>
                                            <div class="checkbox switch"><label><input type="checkbox" disabled="disabled"><span class="cs-place"><span class="fa fa-check cs-handler"></span></span></label></div>
                                            <div class="checkbox switch"><label><input type="checkbox" checked="checked" disabled="disabled"><span class="cs-place"><span class="fa fa-check cs-handler"></span></span></label></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Tags input</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="tags" placeholder="Add a tag" style="display: none;"><div id="tags_tagsinput" class="tagsinput" style="width: 100%; height: auto;"><div id="tags_addTag"><input id="tags_tag" value="" data-default="Add a tag" style="color: rgb(102, 102, 102); width: 68px;"></div><div class="tags_clear"></div></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">File upload</label>
                                        <div class="col-sm-10">
                                            <div class="file-input file-input-new"><input type="hidden"><div class="file-preview ">
                                                <div class="file-preview-status text-center text-success"></div>
                                                    <div class="close fileinput-remove text-right">×</div>
                                                        <div class="file-preview-thumbnails"></div>
                                                    <div class="clearfix"></div></div>
                                                <div class="btn btn-o btn-default btn-file"> <i class="glyphicon glyphicon-folder-open"></i> &nbsp;Browse Images <input type="file" class="file" multiple="" data-show-upload="false" data-show-caption="false" data-show-remove="false" accept="image/jpeg,image/png" data-browse-class="btn btn-o btn-default" data-browse-label="Browse Images" id="1559458494230"></div>
                                            </div>
                                            <p class="help-block">You can select multiple images at once</p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
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
