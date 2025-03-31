package com.shanzhu.hospital.service.serviceImpl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.google.common.collect.Maps;
import com.shanzhu.hospital.entity.po.Admin;
import com.shanzhu.hospital.entity.vo.user.AdminUserVo;
import com.shanzhu.hospital.mapper.AdminUserMapper;
import com.shanzhu.hospital.service.AdminUserService;
import com.shanzhu.hospital.utils.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.BooleanUtils;
import org.springframework.stereotype.Service;

import java.util.Map;


@Service("AdminService")
@RequiredArgsConstructor
public class AdminUserServiceImpl extends ServiceImpl<AdminUserMapper, Admin> implements AdminUserService {



}
