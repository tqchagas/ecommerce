from typing import List
from django.urls import path

from base.views import ProductList, ProductDetail
urlpatterns = [

    path('products/', ProductList.as_view(), name='products'),
    path('products/<int:pk>/', ProductDetail.as_view(), name='product'),

]