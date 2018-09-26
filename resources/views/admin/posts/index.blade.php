@extends('admin.layouts.master')
@section('master.title', 'Bài Viết')
@section('master.body', 'posts')
@section('master.content')

<div class="container-posts">
  <div class="row ">
    <h2 class="heading-2 col-sm-8">
      Quản Lý Bài Viết
    </h2>
    <ol class="breadcrumb text-right col-sm-4">
      <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
      <li class="active">Bài Viết</li>
    </ol>
    <div class="col-sm-12 posts-header">
      <div class="input-group">
        <input type="text" class="form-control" id="input_search" placeholder="Tìm kiếm"/>
        <span class="input-group-addon">
          <a href="javascript:" id="btnSearch"><i class="fa fa-search"></i></a>
        </span>
      </div>
    </div>

    <div class="col-sm-12">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th class="text-center">#</th>
              <th class="text-center">Tiêu đề</th>
              <th class="text-center">Ảnh</th>
              <th class="text-center">Link</th>
              <th class="text-center">Trạng thái</th>
              <th class="text-center">Ngày tạo</th>
              <th class="text-center">Ngày update</th>
              <th class="text-center">Hoạt động</th>
            </tr>
          </thead>
          <tbody id="table-body">
          </tbody>
        </table>
      </div>
      <div class="row pagination-js">

      </div>
    </div>
  </div>
</div>

@endsection
