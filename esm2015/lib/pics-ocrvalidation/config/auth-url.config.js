export class AuthURL {
}
AuthURL.EndPoints = {
    auth: {
        user: {
            conformMail: '/org/auth/forgot-password',
            changePassword: '/org/auth/forgot-password-verification',
            login: '/org/auth/login',
            refreshToken: '/org/auth/refresh-token',
            logout: '/org/auth/logout',
            userInfo: '/org/user/page/list',
            userRole: '/org/user/{id}',
            routeToDynamicPage: '/page/organisation/{orgid}?returnUserPage=true&excludeNoActiveVersionPages=true',
            authMe: '/org/auth/me',
            resetPassword: '/org/user/reset-password',
            orgList: '/org/organization/tree',
            notification: '/worker/notification',
            workerAvailability: '/worker/updateAvailablity',
            getWorkerAvailability: '/worker/getByCurrentUser'
        },
        permission: {
            permissionRoleById: '/app/permission/role/{id}',
            pagePermission: '/app/permission/page',
            pageLookupPermission: '/app/permission/page/lookup'
        },
        microstrategy: {
            login: '/microstrategy/login',
            getLibrary: '/microstrategy/library'
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL29jci12YWxpZGF0aW9uL3NyYy9saWIvcGljcy1vY3J2YWxpZGF0aW9uL2NvbmZpZy9hdXRoLXVybC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLE9BQU87O0FBQ0osaUJBQVMsR0FBRztJQUN4QixJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUU7WUFDSixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLGNBQWMsRUFBRSx3Q0FBd0M7WUFDeEQsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixZQUFZLEVBQUUseUJBQXlCO1lBQ3ZDLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLGtCQUFrQixFQUFFLGlGQUFpRjtZQUNyRyxNQUFNLEVBQUUsY0FBYztZQUN0QixhQUFhLEVBQUUsMEJBQTBCO1lBQ3pDLE9BQU8sRUFBRSx3QkFBd0I7WUFDakMsWUFBWSxFQUFFLHNCQUFzQjtZQUNwQyxrQkFBa0IsRUFBRSwyQkFBMkI7WUFDL0MscUJBQXFCLEVBQUUsMEJBQTBCO1NBQ2xEO1FBQ0QsVUFBVSxFQUFFO1lBQ1Ysa0JBQWtCLEVBQUUsMkJBQTJCO1lBQy9DLGNBQWMsRUFBRSxzQkFBc0I7WUFDdEMsb0JBQW9CLEVBQUUsNkJBQTZCO1NBQ3BEO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsS0FBSyxFQUFFLHNCQUFzQjtZQUM3QixVQUFVLEVBQUUsd0JBQXdCO1NBQ3JDO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEF1dGhVUkwge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnRzID0ge1xyXG4gICAgYXV0aDoge1xyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgY29uZm9ybU1haWw6ICcvb3JnL2F1dGgvZm9yZ290LXBhc3N3b3JkJyxcclxuICAgICAgICBjaGFuZ2VQYXNzd29yZDogJy9vcmcvYXV0aC9mb3Jnb3QtcGFzc3dvcmQtdmVyaWZpY2F0aW9uJyxcclxuICAgICAgICBsb2dpbjogJy9vcmcvYXV0aC9sb2dpbicsXHJcbiAgICAgICAgcmVmcmVzaFRva2VuOiAnL29yZy9hdXRoL3JlZnJlc2gtdG9rZW4nLFxyXG4gICAgICAgIGxvZ291dDogJy9vcmcvYXV0aC9sb2dvdXQnLFxyXG4gICAgICAgIHVzZXJJbmZvOiAnL29yZy91c2VyL3BhZ2UvbGlzdCcsXHJcbiAgICAgICAgdXNlclJvbGU6ICcvb3JnL3VzZXIve2lkfScsXHJcbiAgICAgICAgcm91dGVUb0R5bmFtaWNQYWdlOiAnL3BhZ2Uvb3JnYW5pc2F0aW9uL3tvcmdpZH0/cmV0dXJuVXNlclBhZ2U9dHJ1ZSZleGNsdWRlTm9BY3RpdmVWZXJzaW9uUGFnZXM9dHJ1ZScsXHJcbiAgICAgICAgYXV0aE1lOiAnL29yZy9hdXRoL21lJyxcclxuICAgICAgICByZXNldFBhc3N3b3JkOiAnL29yZy91c2VyL3Jlc2V0LXBhc3N3b3JkJyxcclxuICAgICAgICBvcmdMaXN0OiAnL29yZy9vcmdhbml6YXRpb24vdHJlZScsXHJcbiAgICAgICAgbm90aWZpY2F0aW9uOiAnL3dvcmtlci9ub3RpZmljYXRpb24nLFxyXG4gICAgICAgIHdvcmtlckF2YWlsYWJpbGl0eTogJy93b3JrZXIvdXBkYXRlQXZhaWxhYmxpdHknLFxyXG4gICAgICAgIGdldFdvcmtlckF2YWlsYWJpbGl0eTogJy93b3JrZXIvZ2V0QnlDdXJyZW50VXNlcidcclxuICAgICAgfSxcclxuICAgICAgcGVybWlzc2lvbjoge1xyXG4gICAgICAgIHBlcm1pc3Npb25Sb2xlQnlJZDogJy9hcHAvcGVybWlzc2lvbi9yb2xlL3tpZH0nLFxyXG4gICAgICAgIHBhZ2VQZXJtaXNzaW9uOiAnL2FwcC9wZXJtaXNzaW9uL3BhZ2UnLFxyXG4gICAgICAgIHBhZ2VMb29rdXBQZXJtaXNzaW9uOiAnL2FwcC9wZXJtaXNzaW9uL3BhZ2UvbG9va3VwJ1xyXG4gICAgICB9LFxyXG4gICAgICBtaWNyb3N0cmF0ZWd5OiB7XHJcbiAgICAgICAgbG9naW46ICcvbWljcm9zdHJhdGVneS9sb2dpbicsXHJcbiAgICAgICAgZ2V0TGlicmFyeTogJy9taWNyb3N0cmF0ZWd5L2xpYnJhcnknXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdfQ==