"use strict";var yearFooter=document.querySelector(".footer__year"),changeyear=function(){var e=(new Date).getFullYear();yearFooter.textContent=e},nav=(changeyear(),document.querySelector(".navigation .nav")),OpenBtn=document.querySelector(".openBtn"),Closebtn=document.querySelector(".closeBtn"),btnBox=document.querySelector(".btnBox"),openCloseMenu=function(e){OpenBtn.classList.toggle("removeBtn"),Closebtn.classList.toggle("showBtn"),nav.classList.toggle("showBtn")},accordion=(btnBox.addEventListener("click",openCloseMenu),document.querySelector(".accordion")),accordionBtns=document.querySelectorAll(".accordionBtn");function openAccordionItmes(){this.nextElementSibling.classList.contains("openBtn")?this.nextElementSibling.classList.remove("openBtn"):(closeAccordionItems(),this.nextElementSibling.classList.toggle("openBtn"))}var currentImgIndex,closeAccordionItems=function(){document.querySelectorAll(".accordion__box--answear").forEach(function(e){return e.classList.remove("openBtn")})},imageItem=(accordionBtns.forEach(function(e){return e.addEventListener("click",openAccordionItmes)}),document.querySelectorAll(".image img")),popupGallery=document.querySelector(".galleryBox__popup"),popuImage=document.querySelector(".imagePopUp"),closeBtnImage=document.querySelector(".btnPopup__close"),previousBtnImage=document.querySelector(".btnPopup__left"),nextBtnImage=document.querySelector(".btnPopup__right"),nextImage=(imageItem.forEach(function(e,t){e.addEventListener("click",function(e){popupGallery.classList.remove("hide"),document.body.classList.add("sticky-body"),popuImage.src=e.target.src,currentImgIndex=t})}),function(){currentImgIndex>=imageItem.length-1?currentImgIndex=0:currentImgIndex++,popuImage.src=imageItem[currentImgIndex].src}),previousImage=function(){currentImgIndex<0?currentImgIndex=imageItem.length-1:currentImgIndex--,popuImage.src=imageItem[currentImgIndex].src},username=(nextBtnImage.addEventListener("click",nextImage),previousBtnImage.addEventListener("click",previousImage),closeBtnImage.addEventListener("click",function(){popupGallery.classList.add("hide"),document.body.classList.remove("sticky-body")}),document.querySelector("#username")),email=document.querySelector("#emailPost"),message=document.querySelector("#message"),sendBtn=document.querySelector(".sendBtn"),clearBtn=document.querySelector(".clear"),popup=document.querySelector(".popup"),showError=function(e,t){var e=e.parentElement,n=e.querySelector(".error-text");e.classList.add("error"),n.textContent=t},clearError=function(e){e.parentElement.classList.remove("error")},checkForm=function(e){e.forEach(function(e){""===e.value?showError(e,e.placeholder):clearError(e)})},checkEmail=function(e){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.value)?clearError(e):showError(e,"E-mail jest niepoprawny")},checkErrors=function(){var e=document.querySelectorAll(".form-box"),t=0;e.forEach(function(e){e.classList.contains("error")&&t++}),0===t&&popup.classList.add("show-popup")};sendBtn.addEventListener("click",function(e){e.preventDefault(),checkForm([username,message,email]),checkEmail(email),checkErrors()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsieWVhckZvb3RlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNoYW5nZXllYXIiLCJnZXRGdWxsWWVhciIsIk9wZW5CdG4iLCJuYXYiLCJidG5Cb3giLCJvcGVuQ2xvc2VNZW51IiwidG9nZ2xlIiwiQ2xvc2VidG4iLCJjbGFzc0xpc3QiLCJhY2NvcmRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiYWNjb3JkaW9uQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvcGVuQWNjb3JkaW9uSXRtZXMiLCJ0aGlzIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicmVtb3ZlIiwiY2xvc2VBY2NvcmRpb25JdGVtcyIsImN1cnJlbnRJbWdJbmRleCIsImFsbEFjdGl2ZUl0ZW1zIiwiZm9yRWFjaCIsIml0ZW0iLCJpbWFnZUl0ZW0iLCJidG4iLCJjbG9zZUJ0bkltYWdlIiwiaW1hZ2UiLCJlIiwicG9wdXBHYWxsZXJ5IiwicG9wdUltYWdlIiwidGFyZ2V0IiwiYWRkIiwic3JjIiwibGVuZ3RoIiwicHJldmlvdXNCdG5JbWFnZSIsInByZXZpb3VzSW1hZ2UiLCJ1c2VybmFtZSIsImNsZWFyRXJyb3IiLCJuZXh0QnRuSW1hZ2UiLCJuZXh0SW1hZ2UiLCJzaG93RXJyb3IiLCJpbnB1dCIsImJvZHkiLCJwYXJlbnRFbGVtZW50IiwiZm9ybUJveCIsInNlbmRCdG4iLCJjaGVja0Zvcm0iLCJwbGFjZWhvbGRlciIsImVsIiwiZXJyb3JNc2ciLCJ0ZXh0Q29udGVudCIsIm1zZyIsImNoZWNrRW1haWwiLCJ0ZXN0IiwiZW1haWwiLCJ2YWx1ZSIsImNoZWNrRXJyb3JzIiwiZXJyb3JDb3VudCIsInByZXZlbnREZWZhdWx0IiwiYWxsSW5wdXRzIiwiY29udGFpbnMiLCJwb3B1cCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJhQUFBLElBQU1BLFdBQWFDLFNBQVNDLGNBQWMsZUFBZSxFQUNuREMsV0FBYSxXQURuQixJQUFNSCxHQUFVLElBQUdDLE1B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LFdBQWEsU0FBQVgsR0FDSkEsRUFBQUUsY0FFSlUsVUFBVXBDLE9BQU8sT0FBRSxDQWY5QixFQWtCUXVCLFVBQVVjLFNBQUFBLEdBQ2RiLEVBQUFwQixRQUFBLFNBQUEyQixHQUNILEtBQUFBLEVBQUFPLE1BRUtDLFVBQWNSLEVBQUFBLEVBQWRRLFdBQVcsRUFHVEMsV0FBY1QsQ0FBQSxDQUdkLENBQUEsQ0FsQlIsRUFxQk1JLFdBQUEsU0FBQUUsR0FFRUcsMEpBRUpKLEtBQUFDLEVBQUFDLEtBQUEsRUFDSGxCLFdBQUFpQixDQUFBLEVBR0tJLFVBQWNKLEVBQUUseUJBQUEsQ0FuQnRCLEVBd0JFRSxZQUFBLFdBRUYsSUFBQUcsRUFBQTVELFNBQUFjLGlCQUFBLFdBQUEsRUFyQlE0QyxFQUFhLEVBRWpCRSxFQUFVdEMsUUFBUSxTQUFBMkIsR0FDVkEsRUFBR3ZDLFVBQVVtRCxTQUFTLE9BQU8sR0FDN0JILENBQVUsRUFFbEIsQ0FBQyxFQUVrQixJQUFmQSxHQUNBSSxNQUFNcEQsVUFBVXNCLElBQUksWUFBWSxDQUV4QyxFQUVBYyxRQUFRbEMsaUJBQWlCLFFBQVMsU0FBQWdCLEdBQzlCQSxFQUFFK0IsZUFBZSxFQUNqQlosVUFBVSxDQUFDVixTQUFVMEIsUUFBU1IsTUFBTSxFQUNwQ0YsV0FBV0UsS0FBSyxFQUNoQkUsWUFBWSxDQUVoQixDQUFDIiwiZmlsZSI6Im1haW4ubWluaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHllYXJGb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3Rlcl9feWVhclwiKVxyXG5jb25zdCBjaGFuZ2V5ZWFyID0gKCkgPT4ge1xyXG5cdGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcclxuXHR5ZWFyRm9vdGVyLnRleHRDb250ZW50ID0geWVhcjtcclxufVxyXG5jaGFuZ2V5ZWFyKClcclxuLy8gbmF2aWdhdGlvbiBzdGFydFxyXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbiAubmF2Jyk7XHJcbmNvbnN0IE9wZW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BlbkJ0bicpO1xyXG5jb25zdCBDbG9zZWJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZUJ0bicpO1xyXG5jb25zdCBidG5Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuQm94Jyk7XHJcblxyXG5jb25zdCBvcGVuQ2xvc2VNZW51ID0gKGUpID0+IHtcclxuXHRPcGVuQnRuLmNsYXNzTGlzdC50b2dnbGUoJ3JlbW92ZUJ0bicpO1xyXG5cdENsb3NlYnRuLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3dCdG4nKTtcclxuXHRuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd0J0bicpO1xyXG5cdC8vIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuTWVudScpO1xyXG59O1xyXG5cclxuYnRuQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkNsb3NlTWVudSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09YWNjb3JkaW9uIHNlY3Rpb24gPT09PT09PT09PT1cclxuY29uc3QgYWNjb3JkaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbicpO1xyXG5jb25zdCBhY2NvcmRpb25CdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbkJ0bicpO1xyXG5cclxuZnVuY3Rpb24gb3BlbkFjY29yZGlvbkl0bWVzKCkge1xyXG5cdGlmICh0aGlzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW5CdG4nKSkge1xyXG5cdFx0dGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbkJ0bicpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjbG9zZUFjY29yZGlvbkl0ZW1zKCk7XHJcblx0XHR0aGlzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuQnRuJyk7XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBjbG9zZUFjY29yZGlvbkl0ZW1zID0gKCkgPT4ge1xyXG5cdGNvbnN0IGFsbEFjdGl2ZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9fYm94LS1hbnN3ZWFyJyk7XHJcblx0YWxsQWN0aXZlSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuQnRuJykpO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmFjY29yZGlvbkJ0bnMuZm9yRWFjaCgoYnRuKSA9PlxyXG5cdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5BY2NvcmRpb25JdG1lcylcclxuKTtcclxuXHJcblxyXG5jb25zdCBpbWFnZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltYWdlIGltZ1wiKVxyXG5jb25zdCBwb3B1cEdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGxlcnlCb3hfX3BvcHVwXCIpXHJcbmNvbnN0IHBvcHVJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2VQb3BVcFwiKVxyXG5jb25zdCBjbG9zZUJ0bkltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5Qb3B1cF9fY2xvc2VcIilcclxuY29uc3QgcHJldmlvdXNCdG5JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuUG9wdXBfX2xlZnRcIilcclxuY29uc3QgbmV4dEJ0bkltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5Qb3B1cF9fcmlnaHRcIilcclxuXHJcbmxldCBjdXJyZW50SW1nSW5kZXggXHJcblxyXG5pbWFnZUl0ZW0uZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XHJcblx0aW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT57XHJcblx0XHRwb3B1cEdhbGxlcnkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJzdGlja3ktYm9keVwiKVxyXG4gICAgICAgIHBvcHVJbWFnZS5zcmMgPSBlLnRhcmdldC5zcmNcclxuICAgICAgICBjdXJyZW50SW1nSW5kZXggPSBpbmRleDsgXHJcblx0fSlcclxuXHJcbn0gKVxyXG5jb25zdCBuZXh0SW1hZ2UgPSAoKSA9PiB7XHJcbiAgICBpZihjdXJyZW50SW1nSW5kZXggPj0gaW1hZ2VJdGVtLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICBjdXJyZW50SW1nSW5kZXggPSAwXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjdXJyZW50SW1nSW5kZXgrK1xyXG4gICAgfVxyXG4gICAgXHJcbnBvcHVJbWFnZS5zcmMgPSBpbWFnZUl0ZW1bY3VycmVudEltZ0luZGV4XS5zcmNcclxufVxyXG5jb25zdCBwcmV2aW91c0ltYWdlID0gKCkgPT4ge1xyXG4gICAgaWYoY3VycmVudEltZ0luZGV4IDwgMCl7XHJcbiAgICAgICAgY3VycmVudEltZ0luZGV4ID0gaW1hZ2VJdGVtLmxlbmd0aCAtIDF9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY3VycmVudEltZ0luZGV4LS1cclxuICAgICAgICB9XHJcbiAgICAgICAgcG9wdUltYWdlLnNyYyA9IGltYWdlSXRlbVtjdXJyZW50SW1nSW5kZXhdLnNyY1xyXG59XHJcblxyXG5uZXh0QnRuSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5leHRJbWFnZSApXHJcbnByZXZpb3VzQnRuSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByZXZpb3VzSW1hZ2UgKVxyXG5jbG9zZUJ0bkltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcclxuICAgIHBvcHVwR2FsbGVyeS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LWJvZHlcIilcclxufSApXHJcblxyXG4vLyA9PT09PT09IGNvbnRhY3Qgc2VjdGlvbiA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcm5hbWUnKTtcclxuY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWxQb3N0Jyk7XHJcbmNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZScpO1xyXG5jb25zdCBzZW5kQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbmRCdG4nKTtcclxuY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXInKTtcclxuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcclxuXHJcbmNvbnN0IHNob3dFcnJvciA9IChpbnB1dCwgbXNnKSA9PiB7XHJcblx0Y29uc3QgZm9ybUJveCA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblx0Y29uc3QgZXJyb3JNc2cgPSBmb3JtQm94LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci10ZXh0Jyk7XHJcblxyXG5cdGZvcm1Cb3guY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuXHRlcnJvck1zZy50ZXh0Q29udGVudCA9IG1zZztcclxufTtcclxuY29uc3QgY2xlYXJFcnJvciA9IChpbnB1dCkgPT4ge1xyXG5cdGNvbnN0IGZvcm1Cb3ggPSBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cdGZvcm1Cb3guY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxufTtcclxuXHJcbmNvbnN0IGNoZWNrRm9ybSA9IGlucHV0ID0+IHtcclxuICAgIGlucHV0LmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGlmIChlbC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgc2hvd0Vycm9yKGVsLCBlbC5wbGFjZWhvbGRlcilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGVhckVycm9yKGVsKVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNoZWNrRW1haWwgPSBlbWFpbCA9PiB7XHJcbiAgICBjb25zdCByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcblxyXG4gICAgaWYgKHJlLnRlc3QoZW1haWwudmFsdWUpKSB7XHJcbiAgICAgICAgY2xlYXJFcnJvcihlbWFpbClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd0Vycm9yKGVtYWlsLCAnRS1tYWlsIGplc3QgbmllcG9wcmF3bnknKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjaGVja0Vycm9ycyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBhbGxJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1ib3gnKTtcclxuICAgIGxldCBlcnJvckNvdW50ID0gMDtcclxuXHJcbiAgICBhbGxJbnB1dHMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnZXJyb3InKSkge1xyXG4gICAgICAgICAgICBlcnJvckNvdW50KytcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChlcnJvckNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgnc2hvdy1wb3B1cCcpXHJcbiAgICB9XHJcbn1cclxuXHJcbnNlbmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNoZWNrRm9ybShbdXNlcm5hbWUsIG1lc3NhZ2UsIGVtYWlsXSlcclxuICAgIGNoZWNrRW1haWwoZW1haWwpO1xyXG4gICAgY2hlY2tFcnJvcnMoKVxyXG5cclxufSlcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PSBnYWxsZXJ5PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09IGZvb3Rlcj09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4iXX0=