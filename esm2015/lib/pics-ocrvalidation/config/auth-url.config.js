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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL29jci12YWxpZGF0aW9ucy9zcmMvbGliL3BpY3Mtb2NydmFsaWRhdGlvbi9jb25maWcvYXV0aC11cmwuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxPQUFPOztBQUNKLGlCQUFTLEdBQUc7SUFDeEIsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFO1lBQ0osV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxjQUFjLEVBQUUsd0NBQXdDO1lBQ3hELEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsWUFBWSxFQUFFLHlCQUF5QjtZQUN2QyxNQUFNLEVBQUUsa0JBQWtCO1lBQzFCLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixrQkFBa0IsRUFBRSxpRkFBaUY7WUFDckcsTUFBTSxFQUFFLGNBQWM7WUFDdEIsYUFBYSxFQUFFLDBCQUEwQjtZQUN6QyxPQUFPLEVBQUUsd0JBQXdCO1lBQ2pDLFlBQVksRUFBRSxzQkFBc0I7WUFDcEMsa0JBQWtCLEVBQUUsMkJBQTJCO1lBQy9DLHFCQUFxQixFQUFFLDBCQUEwQjtTQUNsRDtRQUNELFVBQVUsRUFBRTtZQUNWLGtCQUFrQixFQUFFLDJCQUEyQjtZQUMvQyxjQUFjLEVBQUUsc0JBQXNCO1lBQ3RDLG9CQUFvQixFQUFFLDZCQUE2QjtTQUNwRDtRQUNELGFBQWEsRUFBRTtZQUNiLEtBQUssRUFBRSxzQkFBc0I7WUFDN0IsVUFBVSxFQUFFLHdCQUF3QjtTQUNyQztLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBdXRoVVJMIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50cyA9IHtcclxuICAgIGF1dGg6IHtcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIGNvbmZvcm1NYWlsOiAnL29yZy9hdXRoL2ZvcmdvdC1wYXNzd29yZCcsXHJcbiAgICAgICAgY2hhbmdlUGFzc3dvcmQ6ICcvb3JnL2F1dGgvZm9yZ290LXBhc3N3b3JkLXZlcmlmaWNhdGlvbicsXHJcbiAgICAgICAgbG9naW46ICcvb3JnL2F1dGgvbG9naW4nLFxyXG4gICAgICAgIHJlZnJlc2hUb2tlbjogJy9vcmcvYXV0aC9yZWZyZXNoLXRva2VuJyxcclxuICAgICAgICBsb2dvdXQ6ICcvb3JnL2F1dGgvbG9nb3V0JyxcclxuICAgICAgICB1c2VySW5mbzogJy9vcmcvdXNlci9wYWdlL2xpc3QnLFxyXG4gICAgICAgIHVzZXJSb2xlOiAnL29yZy91c2VyL3tpZH0nLFxyXG4gICAgICAgIHJvdXRlVG9EeW5hbWljUGFnZTogJy9wYWdlL29yZ2FuaXNhdGlvbi97b3JnaWR9P3JldHVyblVzZXJQYWdlPXRydWUmZXhjbHVkZU5vQWN0aXZlVmVyc2lvblBhZ2VzPXRydWUnLFxyXG4gICAgICAgIGF1dGhNZTogJy9vcmcvYXV0aC9tZScsXHJcbiAgICAgICAgcmVzZXRQYXNzd29yZDogJy9vcmcvdXNlci9yZXNldC1wYXNzd29yZCcsXHJcbiAgICAgICAgb3JnTGlzdDogJy9vcmcvb3JnYW5pemF0aW9uL3RyZWUnLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbjogJy93b3JrZXIvbm90aWZpY2F0aW9uJyxcclxuICAgICAgICB3b3JrZXJBdmFpbGFiaWxpdHk6ICcvd29ya2VyL3VwZGF0ZUF2YWlsYWJsaXR5JyxcclxuICAgICAgICBnZXRXb3JrZXJBdmFpbGFiaWxpdHk6ICcvd29ya2VyL2dldEJ5Q3VycmVudFVzZXInXHJcbiAgICAgIH0sXHJcbiAgICAgIHBlcm1pc3Npb246IHtcclxuICAgICAgICBwZXJtaXNzaW9uUm9sZUJ5SWQ6ICcvYXBwL3Blcm1pc3Npb24vcm9sZS97aWR9JyxcclxuICAgICAgICBwYWdlUGVybWlzc2lvbjogJy9hcHAvcGVybWlzc2lvbi9wYWdlJyxcclxuICAgICAgICBwYWdlTG9va3VwUGVybWlzc2lvbjogJy9hcHAvcGVybWlzc2lvbi9wYWdlL2xvb2t1cCdcclxuICAgICAgfSxcclxuICAgICAgbWljcm9zdHJhdGVneToge1xyXG4gICAgICAgIGxvZ2luOiAnL21pY3Jvc3RyYXRlZ3kvbG9naW4nLFxyXG4gICAgICAgIGdldExpYnJhcnk6ICcvbWljcm9zdHJhdGVneS9saWJyYXJ5J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXX0=