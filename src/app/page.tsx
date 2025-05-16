import React from 'react';
import FvTop from './_components/layouts/fv/top/FvTop';
import { HomeAbout, HomeBenefits, HomeBlog, HomeRecruit } from './home/_Index';
import HomeStaff from './home/staff/HomeStaff';
import Cta from './_components/layouts/cta/Cta';
import { getStaffList } from '@/app/_libs/microcms/staff';
import { getBlogList } from '@/app/_libs/microcms/blog';
import { formatStaffItems } from '@/app/data/staff/staff';
import { formatBlogItems } from '@/app/data/blog/blogItem';

const blogData = await getBlogList({
	limit: 4,
  queries: {
		orders: 'sortOrder',
    depth: 2,
  },
});

const blogItems = formatBlogItems(blogData.contents);
const staffData = await getStaffList();
const staffItems = formatStaffItems(staffData.contents);

export default async function Page() {

  return (
    <main id="main" className="main">
      <FvTop />
      <HomeAbout />
      <HomeStaff items={staffItems} />
      <HomeBenefits />
      <HomeBlog items={blogItems} />
      <HomeRecruit />
      <Cta />
    </main>
  );
}
